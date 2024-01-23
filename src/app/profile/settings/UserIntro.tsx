import defaultUser from "@/assets/illustration/others/user.jpg"
import { exo_2 } from "@/font"
import { useAuth } from "@/hooks"
import { cn } from "@/lib"
import { getImgSrc } from "@/utils"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
}

export const UserIntro = ({ className, ...rest }: Props) => {
  const { userInfo } = useAuth()

  const imgSrc = getImgSrc({
    img: userInfo.avatar,
    imgType: "user-img",
  })
  console.log("🚀 ~ UserIntro ~ imgSrc:", imgSrc)

  return (
    <div {...rest} className={cn("flex flex-col items-center gap-y-3", exo_2.className, className)}>
      <Image
        // src={defaultUser}
        src={imgSrc || defaultUser}
        onError={(e) => {
          e.currentTarget.src = defaultUser.src
        }}
        alt={`photo of ${userInfo.name}`}
        width={100}
        height={100}
        className="rounded-full p-1 ring-2 ring-blue-500"
      />
      <h2 className="text-lg  font-bold">{userInfo.name}</h2>
    </div>
  )
}