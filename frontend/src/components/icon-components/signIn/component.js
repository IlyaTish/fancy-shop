import './style.scoped.sass'

const SignInIcon = () => {
  return (
    <svg
      className='sign-in-icon icon'
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)' fill='#000'>
        <path
          opacity='.4'
          d='M30 9.375v11.25a5.625 5.625 0 01-5.625 5.625h-4.922a.703.703 0 01-.703-.703v-2.344a.703.703 0 01.703-.703h4.922a1.875 1.875 0 001.875-1.875V9.375A1.875 1.875 0 0024.375 7.5h-4.922a.703.703 0 01-.703-.703V4.453a.703.703 0 01.703-.703h4.922A5.625 5.625 0 0130 9.375z'
        />
        <path d='M12.633 17.338H1.406A1.402 1.402 0 010 15.932v-1.875a1.403 1.403 0 011.406-1.407h11.221L8.08 8.484a1.397 1.397 0 01-.04-2.021L9.321 5.18a1.41 1.41 0 011.987-.006l8.9 8.83a1.407 1.407 0 010 1.998l-8.9 8.824a1.406 1.406 0 01-1.987-.006L8.04 23.537a1.406 1.406 0 01.047-2.033l4.547-4.166z' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <path fill='#fff' d='M0 0h30v30H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SignInIcon
