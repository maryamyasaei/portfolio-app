import { JSX } from "react"
import { highlight } from "sugar-high"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import Counter from "@/components/counter"

interface CodeProps extends React.HTMLProps<HTMLElement> {
  children: string // Define children as a string (code content)
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter,
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={
        {
          ...components,
          ...(props.components || {}),
        } as MDXRemoteProps["components"]
      }
    />
  )
}
