export default function MetisButton({onClick,name} : {onClick: () => void,name:string}) {
    return <button onClick={onClick} className='h-9 text-white text-sm bg-[#fd785f] border-none'>
        {name}
    </button>
}