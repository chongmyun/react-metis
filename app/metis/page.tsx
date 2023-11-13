export default function Page(){
  return (
  <>
    <div className='grid gap-5 xl:grid-cols-9 md:grid-cols-5 sm:grid-cols-3 dashboard-first-row'>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
      <div className='item'>item1</div>
    </div>
    <div className='mt-6 grid gap-5 xl:grid-cols-5 md:grid-cols-3 dashboard-second-row'>
      <div className='item xl:col-span-2'>item1</div>
      <div className='item xl:col-span-3 md:col-span-2'>item1</div>
    </div>
    <div className='mt-6 grid gap-5 xl:grid-cols-11 md:grid-cols-8 dashboard-third-row'>
      <div className='item xl:col-span-3 md:col-span-2'>item1</div>
      <div className='item xl:col-span-4 md:col-span-3'>item1</div>
      <div className='item xl:col-span-4 md:col-span-3'>item1</div>
    </div>
  </>
  )
}