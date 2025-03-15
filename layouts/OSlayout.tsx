import { ReactNode } from 'react'
import type { Authors, OSLabs } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<OSLabs, '_id' | '_raw' | 'body'>
}

export default function OSlayout({ children, content }: Props) {
  const { name, logot, industry, webpage, email, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            About OSLabs
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {logot && (
              <Image
                src={logot}
                alt="logotipo"
                width={182}
                height={182}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-semibold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{industry}</div>
            <div className="font-semibold text-gray-500 uppercase dark:text-gray-400">
              {webpage}
            </div>
            <div className="flex space-x-4 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose dark:prose-invert text-align:justify max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
