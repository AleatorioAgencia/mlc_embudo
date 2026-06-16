-- Instrucciones: Pega este código en el SQL Editor de tu proyecto en Supabase y ejecútalo (Run)

-- 1. Tabla para el estado de la landing (Borrador y Producción)
CREATE TABLE IF NOT EXISTS public.landing_state (
    id TEXT PRIMARY KEY,
    data JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla para los Leads (Prospectos) - Si ya existe, se elimina para actualizar las columnas
DROP TABLE IF EXISTS public.leads CASCADE;

CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT,
    vehicle TEXT,
    timestamp TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Políticas de Seguridad (Ruta Rápida para Pruebas/Producción)
-- Alerta: Estas políticas permiten acceso público. En el futuro, si lo requieres,
-- puedes restringir permisos con RLS (Row Level Security).
ALTER TABLE public.landing_state ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Permitir acceso anonimo a landing_state" ON public.landing_state;
CREATE POLICY "Permitir acceso anonimo a landing_state" ON public.landing_state FOR ALL USING (true);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Permitir acceso anonimo a leads" ON public.leads;
CREATE POLICY "Permitir acceso anonimo a leads" ON public.leads FOR ALL USING (true);
