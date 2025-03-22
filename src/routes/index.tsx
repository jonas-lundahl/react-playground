import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    const { theme, queryClient } = context;
    console.log({ theme }, { queryClient });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
