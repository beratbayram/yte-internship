interface Props {
  params: { slug: string }
}


export default function Page({ params }: Props) {

  const { slug } = params;

  return (
    <main>
      {slug}
    </main>
  );
}
