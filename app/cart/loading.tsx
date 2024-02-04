import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

const Loading = () => {
    return (
        <div className='py-8 lg:py-16'>
            <div className='container'>
                <p className='text-center'>
                    <Button variant='ghost'>
                        <RefreshCw className='mr-2 h-4 w-4 animate-spin' />
                        Loading...
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Loading
