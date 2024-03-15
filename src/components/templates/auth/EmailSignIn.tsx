"use client"
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { ClientSafeProvider, signIn, SignInResponse } from 'next-auth/react'

// import yup from '@/types/yup-extended'
import * as yup from 'yup'

const EmailSignIn = ({
  csrfToken,
  provider,
}: {
  csrfToken: string
  provider: ClientSafeProvider
}) => {
  const router = useRouter()
  const signInForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('must be a valid email').required(),
      password: yup.string().required(),
    }),
    onSubmit: async (values) => {
      console.log(values)
      try {
        const result: SignInResponse | undefined = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
          csrfToken: csrfToken,
        })
        console.log(result)
        if (
          result &&
          (result as SignInResponse).status == 200 &&
          (result as SignInResponse).error == undefined
        ) {
          router.push('/')
        } else {
          alert('password/email incorrect')
        }
      } catch (error) {
        alert('failed to login')
        console.log('Login Failed:', error)
      }
    },
  })
  return (
    <form method="POST" onSubmit={signInForm.handleSubmit}>
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input type="hidden" name="callbackUrl" value={provider.callbackUrl} />

        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          id="email"
          key={'email'}
          placeholder="Email"
          onBlur={signInForm.handleBlur}
          onChange={signInForm.handleChange}
        />
        {signInForm.touched.email && signInForm.errors.email ? (
          <span
            className="font-bold text-red-500 dark:text-red-500"
            title={signInForm.errors.email as string}
          >
            * {signInForm.errors.email}
          </span>
        ) : undefined}
        <input
          type="password"
          key={'password'}
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          id="password"
          placeholder="Password"
          onBlur={signInForm.handleBlur}
          onChange={signInForm.handleChange}
        />
        {signInForm.touched.password && signInForm.errors.password ? (
          <span
            className="font-bold text-red-500 dark:text-red-500"
            title={signInForm.errors.password as string}
          >
            * {signInForm.errors.password}
          </span>
        ) : undefined}
        <button type="submit" className="btn btn-primary w-full">
          Sign in
        </button>
      </div>
    </form>
  )
}
export default EmailSignIn