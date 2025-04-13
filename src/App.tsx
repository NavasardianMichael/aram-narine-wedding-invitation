import { Button, ConfigProvider, Card, Timeline, Typography, Image } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { IMAGES } from './constants/images';

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
          colorPrimary: '#D4B996',
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/90"></div>
          </div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="space-y-8">
              <Title level={1} className="font-serif text-6xl md:text-8xl !text-dark mb-0">
                Արամ և Նարինե
              </Title>
              <div className="space-y-4">
                <Text className="block text-2xl md:text-3xl text-dark font-serif">Մայիսի 17, 2025</Text>
                <Text className="block text-xl md:text-2xl">ԼՈՍ ԱՆՋԵԼԵՍ, ԿԱԼԻՖՈՐՆԻԱ</Text>
                
                {/* Countdown Display */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-none">
                    <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.days}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 rounded-none">
                    <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.hours}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 rounded-none">
                    <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.minutes}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur p-4 rounded-none">
                    <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                    <div className="text-sm uppercase tracking-wider">{timeLabels.seconds}</div>
                  </div>
                </div>

                <Button type="primary" size="large" className="mt-8">
                  ՊԱՏԱՍԽԱՆԵԼ
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <Image
                  src={IMAGES.story.howWeMet}
                  alt="Ինչպես հանդիպեցինք"
                  className="w-full h-64 object-cover mb-6"
                />
                <Title level={3} className="!text-primary">Ինչպես հանդիպեցինք</Title>
                <Text className="text-lg block">23.04.19</Text>
                <Text className="text-lg block leading-relaxed">
                  Մենք հանդիպեցինք տեղական սրճարանում մի արևոտ կեսօրին։ Սուրճի շուրջ սկսված զրույցը 
                  վերածվեց ժամերի խոսակցության մեր ճանապարհորդելու, երաժշտության և ապագայի երազանքների 
                  մասին։ Երբեմն կյանքի լավագույն պահերը գալիս են, երբ դրանք ամենաքիչն ես սպասում։
                </Text>
              </div>
              <div className="space-y-6">
                <Image
                  src={IMAGES.story.proposal}
                  alt="Առաջարկություն"
                  className="w-full h-64 object-cover mb-6"
                />
                <Title level={3} className="!text-primary">Առաջարկությունը</Title>
                <Text className="text-lg block">23.04.22</Text>
                <Text className="text-lg block leading-relaxed">
                  Աստղազարդ երկնքի տակ, Գրիֆիթ Օբսերվատորիայում՝ մեր սիրելի վայրում, Լոս Անջելեսի 
                  քաղաքային լույսերի տեսարանի ներքո, Արամը ծնկի եկավ։ Այն քաղաքի հրաշալի տեսարանի 
                  ներքո, որտեղ սկսվեց մեր սիրո պատմությունը, մենք որոշեցինք միասին սկսել մեր հավերժությունը։
                </Text>
              </div>
            </div>
            <Text className="block text-center mt-16 text-lg">
              Մենք անհամբեր սպասում ենք մեր կյանքի այս նոր գլխի տոնակատարությանը ձեզ հետ։
              <br />
              Կհանդիպենք Լոս Անջելեսում!
            </Text>
          </div>
        </section>

        {/* Event Details with Timeline */}
        <section className="py-20 bg-primary/5 relative">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <Image
              src={IMAGES.venue}
              preview={false}
              alt="Վայրը"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Title level={2} className="text-center mb-16 font-serif text-4xl">Տոնակատարությունը</Title>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur">
                <CalendarOutlined className="text-4xl text-primary mb-4" />
                <Title level={3} className="font-serif">Երբ</Title>
                <Text className="block text-lg font-medium">Շաբաթ, Մայիսի 17, 2025</Text>
                <Text className="block text-lg">16:00 - 23:00</Text>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur">
                <EnvironmentOutlined className="text-4xl text-primary mb-4" />
                <Title level={3} className="font-serif">Որտեղ</Title>
                <Text className="block text-lg font-medium">The Grand Palace</Text>
                <Text className="block text-lg">123 Wedding Avenue</Text>
                <Text className="block text-lg">Los Angeles, CA 90210</Text>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur p-8 rounded-lg">
              <Title level={3} className="text-center mb-12 font-serif">Օրվա ծրագիր</Title>
              <Timeline
                mode="alternate"
                items={[
                  {
                    label: <div className="text-lg font-medium">16:00</div>,
                    children: (
                      <Card className="border-none shadow-none bg-transparent">
                        <Title level={4} className="!text-primary mb-2">Հյուրերի ժամանում և ողջույն</Title>
                        <Text className="text-gray-600">Միացեք մեզ այս հատուկ օրվա սկզբին</Text>
                      </Card>
                    ),
                    dot: <ClockCircleOutlined className="text-2xl text-primary" />,
                  },
                  {
                    label: <div className="text-lg font-medium">16:30</div>,
                    children: (
                      <Card className="border-none shadow-none bg-transparent">
                        <Title level={4} className="!text-primary mb-2">Արարողություն</Title>
                        <Text className="text-gray-600">Սիրո խոստումների փոխանակում</Text>
                      </Card>
                    ),
                    dot: <ClockCircleOutlined className="text-2xl text-primary" />,
                  },
                  {
                    label: <div className="text-lg font-medium">17:30</div>,
                    children: (
                      <Card className="border-none shadow-none bg-transparent">
                        <Title level={4} className="!text-primary mb-2">Կոկտեյլ և լուսանկարներ</Title>
                        <Text className="text-gray-600">Տոնենք միասին գեղեցիկ պահերով</Text>
                      </Card>
                    ),
                    dot: <ClockCircleOutlined className="text-2xl text-primary" />,
                  },
                  {
                    label: <div className="text-lg font-medium">18:30</div>,
                    children: (
                      <Card className="border-none shadow-none bg-transparent">
                        <Title level={4} className="!text-primary mb-2">Ընթրիք և պար</Title>
                        <Text className="text-gray-600">Վայելեք ընթրիքը և պարային երեկոն</Text>
                      </Card>
                    ),
                    dot: <ClockCircleOutlined className="text-2xl text-primary" />,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <Title level={2} className="text-center mb-16">Մեր պահերը</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {IMAGES.gallery.map((image, index) => (
                <div key={index} className="aspect-square">
                  <Image
                    src={image}
                    alt={`Պատկեր ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-20 bg-white">
          <div className="max-w-xl mx-auto text-center px-4">
            <Title level={2}>Հաստատում</Title>
            <Text className="block text-lg mb-8">
              Խնդրում ենք պատասխանել մինչև Ապրիլի 17, 2025
            </Text>
            <Button type="primary" size="large">
              Պատասխանել հիմա
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-dark text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Title level={4} className="!text-white">Մեր մասին</Title>
                <ul className="space-y-2">
                  <li><Button type="link" className="!text-white p-0">Մեր պատմությունը</Button></li>
                  <li><Button type="link" className="!text-white p-0">Ժամանակացույց</Button></li>
                  <li><Button type="link" className="!text-white p-0">Ճանապարհորդություն</Button></li>
                </ul>
              </div>
              <div>
                <Title level={4} className="!text-white">Մանրամասներ</Title>
                <ul className="space-y-2">
                  <li><Button type="link" className="!text-white p-0">Նվերներ</Button></li>
                  <li><Button type="link" className="!text-white p-0">Հաստատում</Button></li>
                  <li><Button type="link" className="!text-white p-0">Հարցեր</Button></li>
                </ul>
              </div>
              <div className="col-span-2">
                <Title level={4} className="!text-white">Կապ</Title>
                <Text className="block text-white">Հարցերի դեպքում կապվեք մեզ հետ՝</Text>
                <Button type="link" className="!text-white p-0">hello@aram-narine.com</Button>
              </div>
            </div>
            <div className="text-center mt-12">
              <Text className="text-white opacity-75">© 2025 Արամ և Նարինե։ Բոլոր իրավունքները պաշտպանված են։</Text>
            </div>
          </div>
        </footer>
      </div>
    </ConfigProvider>
  );
}

export default App;
