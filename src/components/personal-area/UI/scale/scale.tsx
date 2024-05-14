import './scale.scss';

export function Scale(height: any) {
console.log(height);

  return (
    <div className='scale'>
      <div 
        className='scale__active'
        style={height}
        >
      </div>
    </div>
  )
}