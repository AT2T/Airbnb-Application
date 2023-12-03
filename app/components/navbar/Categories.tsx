'use client'
import Container from "../Container";
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb';
import { GiWindmill,GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname} from "next/navigation";
import {FaSkiing} from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import {IoDiamond} from 'react-icons/io5';

export const categories =[ 
    {
     label: 'Beach',
     icon: TbBeach,
     description: 'This property is close to the beach!'
    },
{
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This propety has windmills!'
},
{
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This propety has modern!'
},
{
    label: 'Countryside',
    icon: TbMountain,
    description: 'This propety is in the countryside!'
},
{
    label: 'Pools',
    icon: TbPool,
    description: 'This propety has a pool!'
},{
    label: 'Islands',
    icon: GiIsland,
    description: 'This propety is on island!'
},
{
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This propety is close to a lake!'
},{
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This propety has skiing activities!'
},{
    label: 'Castles',
    icon: GiCastle,
    description: 'This propety is in a castle!'
},{
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This propety has camping activity!'
},{
    label: 'Arctic',
    icon: BsSnow,
    description: 'This propety is in arctic environment!'
},{
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This propety is in a spooky cave !'
},{
    label: 'Desert',
    icon: GiCactus,
    description: 'This propety is in the desert!'
},{
    label: 'Barns',
    icon: GiBarn,
    description: 'This propety is in the barn!'
},{
    label: 'Lux',
    icon: IoDiamond,
    description: 'This propety is luxurious!'
}
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if(!isMainPage){
        return null;
    }
    return (

        <Container>
        <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        "
        >
            {categories.map((item) => (
               <CategoryBox 
               key={item.label}
               label={item.label}
               selected={category == item.label}
               icon={item.icon}
               />
            ))}

        </div>
        </Container>
    );
}

export default Categories;