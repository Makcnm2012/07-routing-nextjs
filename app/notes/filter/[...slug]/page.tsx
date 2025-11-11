import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByCategory({ params }: Props) {
  const { slug } = await params;
  const categoryId = slug?.[0];
  const isAll = categoryId === "all";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, isAll ? undefined : categoryId],
    queryFn: () => fetchNotes("", 1, isAll ? undefined : categoryId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient
        key={categoryId || "all"}
        categoryId={isAll ? undefined : categoryId}
      />
    </HydrationBoundary>
  );
}
