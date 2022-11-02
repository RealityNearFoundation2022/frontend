export default function ResetPasswordCompleted() {
  return (
    <div>
      <div className="py-5 mb-5 text-center w-100 reset-psw bg-primary">
        <span className='text-light h1'>
          Restablecer Contraseña
        </span>
      </div>
      <div className="text-center my-5">
        <div className="h1 text-primary">Su contraseña ha sido restablecida</div>
        <button className="btn-primary btn-lg _btn rounded-pill px-5 mt-4">
          Listo
        </button>
      </div>
    </div>
  )
}