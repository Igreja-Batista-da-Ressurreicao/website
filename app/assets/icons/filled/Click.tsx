import { FC, SVGProps } from 'react'

const ClickIcon: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      role='img'
      aria-label='Click icon'
      viewBox='0 0 13 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.37022 0.778809C7.54517 0.778809 8.55133 1.191 9.3887 2.01539C10.2261 2.83977 10.6448 3.84267 10.6448 5.02407C10.6448 5.69916 10.4987 6.3353 10.2066 6.93249C9.91449 7.52969 9.5023 8.036 8.97002 8.45144H8.30791V7.47776C8.6844 7.17916 8.97326 6.81565 9.17449 6.38723C9.37572 5.95881 9.47633 5.50442 9.47633 5.02407C9.47633 4.16723 9.17125 3.44021 8.56107 2.84302C7.9509 2.24583 7.21739 1.94723 6.36054 1.94723C5.5037 1.94723 4.77019 2.24583 4.16002 2.84302C3.54984 3.44021 3.24476 4.16723 3.24476 5.02407C3.24476 5.50283 3.34537 5.95681 3.5466 6.38602C3.74783 6.81525 4.03668 7.17916 4.41318 7.47776V8.87986C3.68616 8.50337 3.11493 7.97109 2.69949 7.28302C2.28405 6.59495 2.07633 5.84197 2.07633 5.02407C2.07633 3.84267 2.49502 2.83977 3.33239 2.01539C4.16976 1.191 5.18237 0.778809 6.37022 0.778809ZM5.62054 17.1367C5.39984 17.1367 5.19212 17.0945 4.99739 17.0101C4.80265 16.9257 4.63388 16.8121 4.49107 16.6693L0.479492 12.6578L1.57002 11.5283C1.75177 11.3465 1.95625 11.207 2.18344 11.1096C2.41063 11.0122 2.64756 10.996 2.89423 11.0609L4.41318 11.4114V5.06302C4.41318 4.51776 4.60142 4.05688 4.97791 3.68039C5.3544 3.3039 5.81528 3.11565 6.36054 3.11565C6.90581 3.11565 7.36668 3.3039 7.74318 3.68039C8.11967 4.05688 8.30791 4.51776 8.30791 5.06302V8.41249H8.81423C8.87914 8.41249 8.93756 8.42548 8.98949 8.45144C9.04142 8.47741 9.09984 8.50337 9.16475 8.52934L12.0469 9.93144C12.3584 10.0742 12.5889 10.3047 12.7382 10.6228C12.8875 10.9408 12.9297 11.2686 12.8648 11.6062L12.1637 15.8514C12.0988 16.2279 11.917 16.5363 11.6184 16.7764C11.3198 17.0166 10.9823 17.1367 10.6058 17.1367H5.62054ZM5.46476 15.9683H10.9369L11.7742 11.1193L8.21054 9.34723H7.13949V5.06302C7.13949 4.82934 7.06809 4.64109 6.92528 4.49828C6.78247 4.35548 6.59423 4.28407 6.36054 4.28407C6.12686 4.28407 5.93861 4.35548 5.79581 4.49828C5.653 4.64109 5.5816 4.82934 5.5816 5.06302V12.833L2.58265 12.1904L2.13476 12.6383L5.46476 15.9683Z'
        fill='current-color'
      />
      <path
        d='M6.37022 0.778809C7.54517 0.778809 8.55133 1.191 9.3887 2.01539C10.2261 2.83977 10.6448 3.84267 10.6448 5.02407C10.6448 5.69916 10.4987 6.3353 10.2066 6.93249C9.91449 7.52969 9.5023 8.036 8.97002 8.45144H8.30791V7.47776C8.6844 7.17916 8.97326 6.81565 9.17449 6.38723C9.37572 5.95881 9.47633 5.50442 9.47633 5.02407C9.47633 4.16723 9.17125 3.44021 8.56107 2.84302C7.9509 2.24583 7.21739 1.94723 6.36054 1.94723C5.5037 1.94723 4.77019 2.24583 4.16002 2.84302C3.54984 3.44021 3.24476 4.16723 3.24476 5.02407C3.24476 5.50283 3.34537 5.95681 3.5466 6.38602C3.74783 6.81525 4.03668 7.17916 4.41318 7.47776V8.87986C3.68616 8.50337 3.11493 7.97109 2.69949 7.28302C2.28405 6.59495 2.07633 5.84197 2.07633 5.02407C2.07633 3.84267 2.49502 2.83977 3.33239 2.01539C4.16976 1.191 5.18237 0.778809 6.37022 0.778809ZM5.62054 17.1367C5.39984 17.1367 5.19212 17.0945 4.99739 17.0101C4.80265 16.9257 4.63388 16.8121 4.49107 16.6693L0.479492 12.6578L1.57002 11.5283C1.75177 11.3465 1.95625 11.207 2.18344 11.1096C2.41063 11.0122 2.64756 10.996 2.89423 11.0609L4.41318 11.4114V5.06302C4.41318 4.51776 4.60142 4.05688 4.97791 3.68039C5.3544 3.3039 5.81528 3.11565 6.36054 3.11565C6.90581 3.11565 7.36668 3.3039 7.74318 3.68039C8.11967 4.05688 8.30791 4.51776 8.30791 5.06302V8.41249H8.81423C8.87914 8.41249 8.93756 8.42548 8.98949 8.45144C9.04142 8.47741 9.09984 8.50337 9.16475 8.52934L12.0469 9.93144C12.3584 10.0742 12.5889 10.3047 12.7382 10.6228C12.8875 10.9408 12.9297 11.2686 12.8648 11.6062L12.1637 15.8514C12.0988 16.2279 11.917 16.5363 11.6184 16.7764C11.3198 17.0166 10.9823 17.1367 10.6058 17.1367H5.62054ZM5.46476 15.9683H10.9369L11.7742 11.1193L8.21054 9.34723H7.13949V5.06302C7.13949 4.82934 7.06809 4.64109 6.92528 4.49828C6.78247 4.35548 6.59423 4.28407 6.36054 4.28407C6.12686 4.28407 5.93861 4.35548 5.79581 4.49828C5.653 4.64109 5.5816 4.82934 5.5816 5.06302V12.833L2.58265 12.1904L2.13476 12.6383L5.46476 15.9683Z'
        fill='current-color'
        fillOpacity='0.2'
      />
    </svg>
  )
}

export default ClickIcon
