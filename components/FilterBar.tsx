import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';

import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const FilterBar = () => {
    return (
        <div className='bg-[#F9F1E7] py-2 lg:py-4'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div className='flex items-center gap-2'>
                        <Button className='gap-2 bg-transparent p-2 lg:p-2'>
                            <SlidersHorizontal className='h-5 w-5 text-black' />
                            <span className='text-xl text-black'>Filter</span>
                        </Button>

                        <Button className='bg-transparent p-2 lg:p-2'>
                            <LayoutGrid className='h-5 w-5 text-black' />
                            <span className='sr-only'>Grid View</span>
                        </Button>

                        <Button className='bg-transparent p-2 lg:p-2'>
                            <List className='h-5 w-5 text-black' />
                            <span className='sr-only'>List View</span>
                        </Button>
                        <span className='text-base text-black'>
                            Showing 1-16 of 32 results
                        </span>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl text-black'>Show</span>
                            <Select>
                                <SelectTrigger className='w-15'>
                                    <SelectValue placeholder='16' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='16'>16</SelectItem>
                                    <SelectItem value='32'>32</SelectItem>
                                    <SelectItem value='50'>50</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='text-xl text-black'>Sort By</span>
                            <Select>
                                <SelectTrigger className='w-15'>
                                    <SelectValue placeholder='Default' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='16'>
                                        Low - High price
                                    </SelectItem>
                                    <SelectItem value='32'>
                                        High - Low price
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
