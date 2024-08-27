import { useQuery } from "@tanstack/react-query";

import { showAllQuizes } from "../../service/quiz";

export function useAllQuizs() {
  const { isLoading, data: allQuizs } = useQuery({
    queryKey: ["allDepartment"],
    queryFn: () => showAllQuizes(),
  });

  return {
    isLoading,
    allQuizs,
  };
}