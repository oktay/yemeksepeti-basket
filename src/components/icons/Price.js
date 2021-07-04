import * as React from 'react'

function SvgPrice (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <ellipse cx={6.486} cy={3.804} rx={2.162} ry={1.088} fill='#FF6508' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.633 5.956V1.624h9.18v2.708s-.036-1.624 1.621-1.624V1.624C12.434 0 10.814 0 10.814 0H1.633C.013 0 .013 1.624.013 1.624v9.75S.012 13 1.632 13H8.11v-1.627H1.633V10.28H8.11V8.665H1.633V7.583H8.11c0-1.085 1.08-1.627 1.08-1.627H1.633zM15.494 5.973c-.417.382-.951.576-1.494.543v1.088s2-.046 2-1.088a.558.558 0 00-.145-.391.465.465 0 00-.361-.152zM15.494 8.148c-.418.38-.951.574-1.494.54v1.088s2-.033 2-1.087a.555.555 0 00-.146-.391.462.462 0 00-.36-.15zM15.493 10.308a2.03 2.03 0 01-1.493.54v1.088s2-.021 2-1.075a.556.556 0 00-.142-.399.463.463 0 00-.365-.154z'
        fill='#FF6508'
      />
      <ellipse cx={14} cy={4.344} rx={2} ry={1.088} fill='#FF6508' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.976 9.152a2.32 2.32 0 01-1.612.544 2.307 2.307 0 01-1.62-.544.528.528 0 00-.542.544c0 1.05 2.162 1.084 2.162 1.084s2.165-.034 2.165-1.084a.536.536 0 00-.553-.544zM12.976 11.119c-.45.397-1.026.6-1.612.57a2.24 2.24 0 01-1.62-.57.515.515 0 00-.387.163.573.573 0 00-.155.407c0 1.101 2.162 1.14 2.162 1.14s2.162-.039 2.162-1.14a.573.573 0 00-.158-.41.515.515 0 00-.392-.16z'
        fill='#FF6508'
      />
      <ellipse cx={11.352} cy={7.604} rx={2.162} ry={1.088} fill='#FF6508' />
    </svg>
  )
}

export default SvgPrice
