import { FC, SVGProps } from 'react'

type IconProps = FC<SVGProps<SVGSVGElement>> & {
  size?: 'sm' | 'md' | 'lg' | 'default'
  color?: 'dark' | 'light' | 'default'
}

const sizeClasses = {
  default: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
}

const colorClasses = {
  dark: 'fill-zinc-950',
  light: 'fill-zinc-200',
  default: 'fill-[#20DF64]',
}

const SpotifyIcon = (props: IconProps) => {
  const { size = 'default', color = 'default', ...res } = props
  return (
    <svg
      role='img'
      aria-label='spotify icon'
      viewBox='0 0 53 53'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${sizeClasses[size]} ${colorClasses[color]}`}
      {...res}
    >
      <path
        d='M26.5 0C11.8716 0 0 11.8716 0 26.5C0 41.1284 11.8716 53 26.5 53C41.1284 53 53 41.1284 53 26.5C53 11.8716 41.1284 0 26.5 0ZM37.2603 38.9913C36.8115 38.9913 36.5337 38.8524 36.1169 38.6067C29.4492 34.5889 21.6915 34.4179 14.03 35.9887C13.6133 36.0956 13.0683 36.2665 12.7585 36.2665C11.722 36.2665 11.0702 35.4438 11.0702 34.5782C11.0702 33.4776 11.722 32.954 12.5234 32.7831C21.2748 30.849 30.2185 31.02 37.848 35.5827C38.4998 35.9994 38.8845 36.3734 38.8845 37.3458C38.8845 38.3181 38.1258 38.9913 37.2603 38.9913ZM40.1347 31.9817C39.579 31.9817 39.205 31.7359 38.8204 31.5329C32.1419 27.5792 22.1831 25.9871 13.3248 28.3913C12.8119 28.5302 12.5341 28.6692 12.0532 28.6692C10.9099 28.6692 9.98024 27.7395 9.98024 26.5962C9.98024 25.4528 10.5359 24.6942 11.6365 24.3843C14.6071 23.5508 17.6417 22.931 22.0869 22.931C29.0218 22.931 35.7216 24.6514 41.0002 27.7929C41.8657 28.3058 42.2077 28.9683 42.2077 29.898C42.197 31.052 41.2994 31.9817 40.1347 31.9817ZM43.4472 23.8393C42.8915 23.8393 42.5496 23.7004 42.0688 23.4226C34.4607 18.8813 20.8581 17.7913 12.0532 20.249C11.6685 20.3558 11.1877 20.5268 10.6748 20.5268C9.26431 20.5268 8.18508 19.4262 8.18508 18.005C8.18508 16.5518 9.08266 15.729 10.0444 15.4512C13.8056 14.3506 18.0157 13.827 22.5998 13.827C30.4002 13.827 38.5746 15.4512 44.5478 18.9347C45.3813 19.4155 45.9262 20.078 45.9262 21.3496C45.9262 22.8028 44.7508 23.8393 43.4472 23.8393Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default SpotifyIcon