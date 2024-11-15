import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-white rounded-lg shadow m-4 dark:bg-bgColor'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024 Rahim Ali
            <a href='/' className='hover:underline'>
              {' '}
              Blogs
            </a>
            . All Rights Reserved
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li className='mr-4'>
              <a
                href='https://github.com/rahim1976'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 .5C5.372.5 0 5.872 0 12.5c0 5.029 3.219 9.294 7.658 10.832.56.103.76-.242.76-.537 0-.265-.009-1.155-.015-2.088-3.115.676-3.785-1.5-3.785-1.5-.513-1.303-1.25-1.648-1.25-1.648-1.022-.698.078-.684.078-.684 1.13.079 1.725 1.164 1.725 1.164 1.006 1.72 2.637 1.224 3.284.934.102-.727.394-1.224.716-1.505-2.49-.284-5.11-1.242-5.11-5.529 0-1.22.435-2.224 1.148-3.007-.115-.284-.498-1.43.11-2.98 0 0 .942-.303 3.08 1.153A10.715 10.715 0 0112 4.58c.948.004 1.895.128 2.778.375 2.137-1.456 3.08-1.153 3.08-1.153.608 1.55.226 2.696.11 2.98.713.783 1.148 1.787 1.148 3.007 0 4.307-2.628 5.242-5.117 5.52.404.344.76 1.023.76 2.067 0 1.49-.014 2.688-.014 3.046 0 .297.198.646.762.537C20.781 21.794 24 17.529 24 12.5 24 5.872 18.628.5 12 .5z' />
                </svg>
                GitHub
              </a>
            </li>
            <li className='mr-4'>
              <a
                href='https://www.linkedin.com/in/rahim-ali-89b7b9279/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22.225 0h-20.45C.997 0 0 .997 0 2.225v19.55C0 23.003.997 24 2.225 24h20.45C23.003 24 24 23.003 24 21.775V2.225C24 .997 23.003 0 22.225 0zM7.136 20.452H3.553V9.505h3.583v10.947zm-1.791-12.491c-1.16 0-2.094-.94-2.094-2.097 0-1.157.934-2.097 2.094-2.097 1.161 0 2.095.94 2.095 2.097 0 1.157-.934 2.097-2.095 2.097zm16.56 12.491h-3.583v-5.894c0-1.403-.025-3.202-1.956-3.202-1.955 0-2.253 1.526-2.253 3.104v6.992h-3.583V9.505h3.438v1.494h.05c.48-.911 1.647-1.865 3.386-1.865 3.619 0 4.29 2.385 4.29 5.49v6.828z' />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://x.com/realrahim1967/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.643 4.937c-.835.37-1.73.617-2.67.729a4.658 4.658 0 002.036-2.573 9.28 9.28 0 01-2.964 1.129A4.628 4.628 0 0016.34 4c-2.56 0-4.638 2.078-4.638 4.648 0 .364.042.72.123 1.063C7.691 9.404 4.067 7.175 1.64 4.63c-.427.735-.671 1.585-.671 2.493 0 1.721.877 3.236 2.206 4.125a4.602 4.602 0 01-2.094-.575v.058c0 2.396 1.704 4.39 3.964 4.843a4.614 4.614 0 01-2.09.08c.588 1.832 2.285 3.158 4.295 3.196a9.25 9.25 0 01-5.738 1.973c-.37 0-.735-.022-1.094-.064a13.027 13.027 0 007.065 2.072c8.485 0 13.131-7.046 13.131-13.135 0-.2 0-.398-.014-.596A9.423 9.423 0 0024 4.59a9.314 9.314 0 01-2.357.646A4.644 4.644 0 0023.643 4.937z' />
                </svg>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
