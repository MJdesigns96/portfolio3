export default function Sidebar() {
    return (
        <div className="sidebar bg-slate-900 text-blue-100 w-1/3 space-y-6 py-24 px-2 relative inset-y-0 left-0 transition duration-200 ease-in-out">
            <h1 className="text-5xl ms-5">Hi there 👋,</h1>
            <h2 className="text-3xl ms-5 text-gray-400" >i'm 
                <span className="text-white"> marcus </span>
                a
                <span className="text-white"> full stack developer </span>
                based out of 
                <span className="text-white"> Toronto, Ontario, Canada.</span>
            </h2>
        </div>
    )
}