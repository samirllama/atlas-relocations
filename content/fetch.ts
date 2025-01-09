export const contentGqlFetcher = async <T>({
  query,
  variables = {},
  preview = false,
  tags = [],
}: {
  query: string
  variables?: any
  preview?: boolean
  tags?: string[]
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { tags, revalidate: 10 },
    },
  )

  const { data, errors } = await res.json()

  if (errors) {
    console.error("Contentful Error Details:", JSON.stringify(errors, null, 2))
    console.log("Query:", query)
    console.log("Variables:", variables)
    console.log("Space ID:", process.env.CONTENTFUL_SPACE_ID)
    // Don't log the full token for security, just the first few characters
    console.log(
      "Access Token (first 6 chars):",
      process.env.CONTENTFUL_ACCESS_TOKEN?.slice(0, 6),
    )
    console.log(errors)
    throw new Error(
      `Contentful Error: ${errors[0]?.message || "Unknown error"}`,
    )
  }

  return data as T
}
