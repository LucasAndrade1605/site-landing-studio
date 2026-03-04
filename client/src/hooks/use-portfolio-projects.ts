import { useEffect, useState } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  url: string;
  thumbnail_url: string;
  tags: string[];
  active: number
}

export function usePortfolioProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://www.landingstudio.com.br/api/portfolio.php`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        const all: Project[] = Array.isArray(data) ? data : data.projects ?? [];
        setProjects(all.filter((p: Project) => p.active === 1));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}

