import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ProductDetailsTab = () => {
    return (
        <div className='py-10 lg:py-12'>
            <div className='container'>
                <Tabs defaultValue='account'>
                    <TabsList className='mx-auto grid w-full grid-cols-3 lg:w-2/4'>
                        <TabsTrigger value='description'>
                            Description
                        </TabsTrigger>
                        <TabsTrigger value='additional-information'>
                            Additional Information
                        </TabsTrigger>
                        <TabsTrigger value='reviews'>Reviews [5]</TabsTrigger>
                    </TabsList>

                    <TabsContent value='description'>
                        <Card className='border-0 shadow-none'>
                            <CardContent>
                                <CardDescription className='mb-5'>
                                    Embodying the raw, wayward spirit of rock
                                    ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and
                                    sound of Marshall, unplugs the chords, and
                                    takes the show on the road.
                                </CardDescription>
                                <CardDescription>
                                    Weighing in under 7 pounds, the Kilburn is a
                                    lightweight piece of vintage styled
                                    engineering. Setting the bar as one of the
                                    loudest speakers in its class, the Kilburn
                                    is a compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound that
                                    is both articulate and pronounced. The
                                    analogue knobs allow you to fine tune the
                                    controls to your personal preferences while
                                    the guitar-influenced leather strap enables
                                    easy and stylish travel.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value='additional-information'>
                        <Card className='border-0 shadow-none'>
                            <CardContent>
                                <CardDescription className='mb-5'>
                                    Embodying the raw, wayward spirit of rock
                                    ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and
                                    sound of Marshall, unplugs the chords, and
                                    takes the show on the road.
                                </CardDescription>
                                <CardDescription>
                                    Weighing in under 7 pounds, the Kilburn is a
                                    lightweight piece of vintage styled
                                    engineering. Setting the bar as one of the
                                    loudest speakers in its class, the Kilburn
                                    is a compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound that
                                    is both articulate and pronounced. The
                                    analogue knobs allow you to fine tune the
                                    controls to your personal preferences while
                                    the guitar-influenced leather strap enables
                                    easy and stylish travel.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value='reviews'>
                        <Card className='border-0 shadow-none'>
                            <CardContent>
                                <CardDescription className='mb-5'>
                                    Embodying the raw, wayward spirit of rock
                                    ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and
                                    sound of Marshall, unplugs the chords, and
                                    takes the show on the road.
                                </CardDescription>
                                <CardDescription>
                                    Weighing in under 7 pounds, the Kilburn is a
                                    lightweight piece of vintage styled
                                    engineering. Setting the bar as one of the
                                    loudest speakers in its class, the Kilburn
                                    is a compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound that
                                    is both articulate and pronounced. The
                                    analogue knobs allow you to fine tune the
                                    controls to your personal preferences while
                                    the guitar-influenced leather strap enables
                                    easy and stylish travel.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ProductDetailsTab
