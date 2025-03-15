import { Authors, OSLabs, allAuthors, allOSLabs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import OSlayout from '@/layouts/OSlayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'OSLabs' })

export default function Page() {
  const name = allOSLabs.find((p) => p.slug === 'default') as OSLabs
  const mainContent = coreContent(name)

  return (
    <>
      <OSlayout content={mainContent}>
        <MDXLayoutRenderer code={name.body.code} />
      </OSlayout>
    </>
  )
}
