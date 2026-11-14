-- Track each approved student's active EDDELI session.
-- Session presence expires in the UI after 90 seconds without a heartbeat.
CREATE TABLE public.student_presence_sessions (
  student_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_id uuid NOT NULL,
  last_seen_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  PRIMARY KEY (student_id, session_id)
);

ALTER TABLE public.student_presence_sessions ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.student_presence_sessions FROM PUBLIC, anon, authenticated;
GRANT SELECT ON TABLE public.student_presence_sessions TO authenticated;

CREATE POLICY eddeli_student_presence_admin_select
  ON public.student_presence_sessions
  FOR SELECT
  TO authenticated
  USING (private.eddeli_is_admin());

CREATE OR REPLACE FUNCTION private.eddeli_set_student_presence(
  p_session_id uuid,
  p_online boolean
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  v_student_id uuid := (SELECT auth.uid());
BEGIN
  IF v_student_id IS NULL OR p_session_id IS NULL OR p_online IS NULL THEN
    RAISE EXCEPTION 'A valid student session and presence state are required.';
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = v_student_id
      AND role = 'student'
      AND approval_status = 'approved'
  ) THEN
    RAISE EXCEPTION 'Only an approved student can update student presence.';
  END IF;

  IF p_online THEN
    INSERT INTO public.student_presence_sessions (student_id, session_id, last_seen_at)
    VALUES (v_student_id, p_session_id, pg_catalog.now())
    ON CONFLICT (student_id, session_id)
    DO UPDATE SET last_seen_at = pg_catalog.now();

    DELETE FROM public.student_presence_sessions
    WHERE student_id = v_student_id
      AND session_id <> p_session_id
      AND last_seen_at < pg_catalog.now() - INTERVAL '5 minutes';
  ELSE
    DELETE FROM public.student_presence_sessions
    WHERE student_id = v_student_id
      AND session_id = p_session_id;
  END IF;
END;
$function$;

REVOKE ALL ON FUNCTION private.eddeli_set_student_presence(uuid, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.eddeli_set_student_presence(uuid, boolean) TO authenticated;

CREATE OR REPLACE FUNCTION public.eddeli_set_student_presence(
  p_session_id uuid,
  p_online boolean
)
RETURNS void
LANGUAGE sql
SECURITY INVOKER
SET search_path TO ''
AS $function$
  SELECT private.eddeli_set_student_presence(p_session_id, p_online);
$function$;

REVOKE ALL ON FUNCTION public.eddeli_set_student_presence(uuid, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eddeli_set_student_presence(uuid, boolean) TO authenticated;
