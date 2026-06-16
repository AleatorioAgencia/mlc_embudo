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

-- 4. Bucket de Almacenamiento (Supabase Storage) para archivos subidos (Imágenes y Videos)
-- Crea el bucket 'cms_media' de manera pública
INSERT INTO storage.buckets (id, name, public)
VALUES ('cms_media', 'cms_media', true)
ON CONFLICT (id) DO NOTHING;

-- Políticas de Seguridad para permitir lectura y subida pública anónima en cms_media
DROP POLICY IF EXISTS "Permitir acceso publico de lectura" ON storage.objects;
CREATE POLICY "Permitir acceso publico de lectura" ON storage.objects FOR SELECT USING (bucket_id = 'cms_media');

DROP POLICY IF EXISTS "Permitir subida anonima" ON storage.objects;
CREATE POLICY "Permitir subida anonima" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'cms_media');

DROP POLICY IF EXISTS "Permitir actualizacion anonima" ON storage.objects;
CREATE POLICY "Permitir actualizacion anonima" ON storage.objects FOR UPDATE USING (bucket_id = 'cms_media');

DROP POLICY IF EXISTS "Permitir borrado anonimo" ON storage.objects;
CREATE POLICY "Permitir borrado anonimo" ON storage.objects FOR DELETE USING (bucket_id = 'cms_media');
