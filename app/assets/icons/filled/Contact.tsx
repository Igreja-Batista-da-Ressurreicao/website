import { FC, SVGProps } from 'react'

const ContactIcon: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      role='img'
      aria-label='Contact icon'
      viewBox='0 0 24 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.36364 26V23.6364H21.2727V26H2.36364ZM2.36364 2.36364V0H21.2727V2.36364H2.36364ZM11.8182 14.1818C12.803 14.1818 13.6402 13.8371 14.3295 13.1477C15.0189 12.4583 15.3636 11.6212 15.3636 10.6364C15.3636 9.65152 15.0189 8.81439 14.3295 8.125C13.6402 7.43561 12.803 7.09091 11.8182 7.09091C10.8333 7.09091 9.99621 7.43561 9.30682 8.125C8.61742 8.81439 8.27273 9.65152 8.27273 10.6364C8.27273 11.6212 8.61742 12.4583 9.30682 13.1477C9.99621 13.8371 10.8333 14.1818 11.8182 14.1818ZM2.36364 22.4545C1.71364 22.4545 1.1572 22.2231 0.694318 21.7602C0.231439 21.2973 0 20.7409 0 20.0909V5.90909C0 5.25909 0.231439 4.70265 0.694318 4.23977C1.1572 3.77689 1.71364 3.54545 2.36364 3.54545H21.2727C21.9227 3.54545 22.4792 3.77689 22.942 4.23977C23.4049 4.70265 23.6364 5.25909 23.6364 5.90909V20.0909C23.6364 20.7409 23.4049 21.2973 22.942 21.7602C22.4792 22.2231 21.9227 22.4545 21.2727 22.4545H2.36364ZM4.43182 20.0909C5.31818 18.9879 6.39167 18.1212 7.65227 17.4909C8.91288 16.8606 10.3015 16.5455 11.8182 16.5455C13.3348 16.5455 14.7235 16.8606 15.9841 17.4909C17.2447 18.1212 18.3182 18.9879 19.2045 20.0909H21.2727V5.90909H2.36364V20.0909H4.43182ZM7.91818 20.0909H15.7182C15.147 19.697 14.5314 19.4015 13.8716 19.2045C13.2117 19.0076 12.5273 18.9091 11.8182 18.9091C11.1091 18.9091 10.4246 19.0076 9.76477 19.2045C9.10492 19.4015 8.48939 19.697 7.91818 20.0909ZM11.8182 11.8182C11.4833 11.8182 11.2027 11.7049 10.9761 11.4784C10.7496 11.2519 10.6364 10.9712 10.6364 10.6364C10.6364 10.3015 10.7496 10.0208 10.9761 9.79432C11.2027 9.5678 11.4833 9.45455 11.8182 9.45455C12.153 9.45455 12.4337 9.5678 12.6602 9.79432C12.8867 10.0208 13 10.3015 13 10.6364C13 10.9712 12.8867 11.2519 12.6602 11.4784C12.4337 11.7049 12.153 11.8182 11.8182 11.8182Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default ContactIcon
