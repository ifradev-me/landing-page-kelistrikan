import { createContext, useContext, useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity";
import { ALL_DATA_QUERY } from "@/lib/queries";
import { setSitePhone } from "@/lib/whatsapp";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { ErrorScreen } from "@/components/common/ErrorScreen";

const SanityContext = createContext(null);

export function SanityProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch(ALL_DATA_QUERY)
      .then((res) => {
        if (cancelled) return;
        if (!res?.site || !res?.copy) {
          setError("Data Sanity tidak lengkap. Pastikan dokumen 'site' dan 'siteCopy' sudah dibuat.");
          return;
        }
        if (res.site?.phoneIntl) setSitePhone(res.site.phoneIntl);
        setData(res);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Gagal memuat konten dari Sanity.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <ErrorScreen message={error} />;
  if (!data) return <LoadingScreen />;
  return <SanityContext.Provider value={data}>{children}</SanityContext.Provider>;
}

export function useSanity() {
  const ctx = useContext(SanityContext);
  if (!ctx) throw new Error("useSanity harus dipanggil di dalam <SanityProvider>");
  return ctx;
}
