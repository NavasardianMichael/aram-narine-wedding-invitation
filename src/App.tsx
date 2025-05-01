import heroImage from './assets/images/IMG_3586.jpg';
import proposalImage from './assets/images/IMG_7183.jpg';
import galleryImage1 from './assets/images/IMG_6184.jpg';
import galleryImage2 from './assets/images/IMG_1181.jpg';
import galleryImage3 from './assets/images/IMG_0819.jpg';
import galleryImage4 from './assets/images/IMG_3845.jpg';
import galleryImage5 from './assets/images/IMG_5596.jpg';
import galleryImage6 from './assets/images/IMG_8891.jpg';
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Card, ConfigProvider, Flex, Image, Timeline, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const IMAGES = {
  hero: heroImage,
  story: {
    proposal: proposalImage,
  },
  gallery: [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ],
  venue: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop'
};

const { Title, Text } = Typography;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const weddingDate = dayjs('2025-05-17T16:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const diff = weddingDate.diff(now, 'second');

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (60 * 60 * 24)),
        hours: Math.floor((diff % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((diff % (60 * 60)) / 60),
        seconds: diff % 60,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Armenian translations for countdown
  const timeLabels = {
    days: 'օր',
    hours: 'ժամ',
    minutes: 'րոպե',
    seconds: 'վայրկյան'
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6b6868',
          fontFamily: "'Playfair Display', serif",
        },
      }}
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={IMAGES.hero}
              preview={false}
              alt="Հարսանեկան լուսանկար"
              className="!h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-secondary/90"></div>
          </div>
          <div className="text-center max-w-4xl mx-auto relative z-10 translate-y-[200px]">
            <div className="space-y-8">
              <Title level={1} className="font-serif text-6xl md:text-8xl !text-dark mb-0">
                Արամ և Նարինե
              </Title>
              <div className="space-y-4">
                <Text className="block text-2xl md:text-3xl text-dark">Մայիսի 17, 2025</Text>

                {/* Countdown Display */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
                  <div className="bg-white/90 backdrop-blur p-4 !rounded-lg">
                    <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                    <div className="text-sm uppercase tracking-wider opa">{timeLabels.days}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 !rounded-lg">
                    <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.hours}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 !rounded-lg">
                    <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.minutes}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 !rounded-lg">
                    <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.seconds}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="pt-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <Title className="block text-center mt-2 !mb-16 text-lg !text-primary">

              Հարգելի հյուրեր
              <br />
              Սիրով հրավիրում ենք Ձեզ՝ կիսելու մեզ հետ մեր կյանքի կարևորագույն և հիշարժան օրը
            </Title>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="space-y-6 flex-1">
                <Title level={3} className="!text-primary !m-0">Առաջարկությունը</Title>
                <Text className="text-lg block !m-0">Հոկտեմբերի 25, 2022</Text>
                <Image
                  src={IMAGES.story.proposal}
                  alt="Առաջարկություն"
                  preview={{
                    maskClassName: 'w-96 object-cover',
                    toolbarRender: () => null,
                    imageRender: () => (
                      <img src={IMAGES.story.proposal} className="w-96 object-contain" />
                    )
                  }}
                  className="w-full h-64 object-cover mb-6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details with Timeline */}
        <section className="py-20 bg-primary/5 relative">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <Image
              src={IMAGES.venue}
              preview={false}
              alt="Վայրը"
              className="!h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Title level={2} className="text-center mb-16 font-serif text-4xl">Տոնակատարությունը</Title>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur">
                <CalendarOutlined className="text-4xl text-primary mb-4" />
                <Title level={3} className="font-serif">Երբ</Title>
                <Text className="block text-lg font-medium">Շաբաթ, Մայիսի 17, 2025</Text>
                <Text className="block text-lg">14:15 - 23:00</Text>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur">
                <EnvironmentOutlined className="text-4xl text-primary mb-4" />
                <Title level={3} className="font-serif">Որտեղ</Title>
                <a href='https://yandex.com/maps/-/CHf3iCPl' target='_blank' className="block text-lg իտ">
                  <Text className="block text-lg font-medium">«Մորենա» ռեստորանային համալիր</Text>
                  <Text className="block text-lg">Մխիթար Հերացու փող., 7/8 շենք</Text>
                </a>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur p-8 max-md:p-4 rounded-lg">
              <Title level={3} className="text-center mb-12 font-serif">Օրվա ծրագիր</Title>
              <Timeline
                // mode="left"
                items={[
                  {
                    // label: <div className="text-lg font-medium">12:15</div>,
                    children: (
                      < >
                        <Title level={4} className="!text-primary mb-8">12:15 <br /> Պսակադրության Արարողություն</Title>
                        <a href='https://yandex.com/maps/-/CHf3yR0d' target='_blank'>
                          <Text className="text-gray-600">Խոր վիրապի վանք</Text>
                        </a>
                      </>
                    ),
                  },
                  {
                    // label: <div className="text-lg font-medium">17:15</div>,
                    children: (
                      < >
                        <Title level={4} className="!text-primary mb-2">17:15 <br />ԶԱԳՍ-ի Արարողություն</Title>
                        <Text className="text-gray-600">Հարսանեկան խնջույքի սրահի բակում</Text>
                      </>
                    ),
                  },
                  {
                    // label: <div className="text-lg font-medium">17:40</div>,
                    children: (
                      < >
                        <Title level={4} className="!text-primary mb-2">17:40 <br />Հարսանեկան խնջույք</Title>
                        <a href='https://yandex.com/maps/-/CHf3iCPl' target='_blank'>
                          <Text className="text-gray-600">«Մորենա» ռեստորանային համալիր</Text>
                        </a>
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="pt-20 py-4 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <Title level={2} className="text-center mb-16">Մեր Լավագույն Պահերը</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {IMAGES.gallery.map((image, index) => (
                <div key={index} className="aspect-square">
                  <Image
                    src={image}
                    alt={`Պատկեր ${index + 1}`}
                    preview={{
                      maskClassName: 'w-full !h-full',
                      toolbarRender: () => null,
                      imageRender: () => (
                        <img src={image} className="w-96 object-contain" />
                      )
                    }}
                    className="w-full !h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-dark text-white">
          <div className="max-w-4xl  px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 text-xl">
                <Title level={3} className="!text-white">Կապ</Title>
                <Text className="block !text-white">Հարցերի դեպքում կապվեք մեզ հետ՝</Text>
                <Flex vertical gap={2}>
                  <a href="tel:+37494888082" className="!text-white hover:underline">
                    094 888 082
                  </a>
                </Flex>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </ConfigProvider >
  );
}

export default App;
