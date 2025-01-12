
export default function Header() {
  return (
    <div className="flex items-center justify-between px-8">
      <div>
        <img src="./icons/Logo.svg"  alt="icon" className="cursor-pointer" />
      </div>
      <div>
        <img src="./icons/Burger.svg" alt="" className="cursor-pointer lg:hidden" />
      </div>
    </div>
  )
}
