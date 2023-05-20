import star from '../images/shape-img/04.png'
import './card.css'
const products = [
    {
      id: 1,
      name: 'Paris',
      href: '#',
      imageSrc: 'https://wallpapercave.com/wp/xN5oR8u.jpg',
      imageAlt: "Paris Img",
      price: '$3500',
    },
    {
        id: 2,
        name: 'Sweden',
        href: '#',
        imageSrc: 'https://wallpapercave.com/dwp2x/D9NwcJk.jpg',
        imageAlt: "sweden img",
        price: '$1500',
      },
      {
        id: 3,
        name: 'Crotcia',
        href: '#',
        imageSrc: 'https://wallpapercave.com/dwp2x/LzrJkez.jpg',
        imageAlt: "Croticia img",
        price: '$5000',
      },
      {
        id: 4,
        name: 'West Virgina',
        href: '#',
        imageSrc: 'https://wallpaperaccess.com/full/295918.jpg',
        imageAlt: "west img.",
        price: '$2090',
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white" id="lad">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div id='star'>
                <img src={star}/>
                </div>
        </div>
      </div>
    )
  }
  