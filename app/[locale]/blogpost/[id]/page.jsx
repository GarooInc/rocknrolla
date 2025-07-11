import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import LineButton from '@/components/LineButton/LineButton';
import BlogItem from '@/components/BlogItem/BlogItem';
import PocketBase from 'pocketbase';

const namespaces = ['general', 'navBar'];

export async function generateMetadata({ params }) {
    const { locale, id } = params;

  const blogId = id.split('_')[1];

  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);

  try {
    const blog = await pb.collection('blog').getOne(blogId);
    const formattedTitle = blog?.[`title_${locale}`] ?? 'Blog Post';
    const description = blog?.[`desc_${locale}`].replace(/<[^>]+>/g, '') || 'No description available';
    const bannerImage = blog
      ? `${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}`
      : '';

    return {
      title: formattedTitle,
      description,
      openGraph: {
        title: formattedTitle,
        description,
        images: [bannerImage],
        url: `https://rocknrolla23.com/${locale}/blogpost/${id}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: formattedTitle,
        description,
        images: [bannerImage],
      },
    };
  } catch (error) {
    return {
      title: 'Project not found',
      description: 'No se encontró el proyecto solicitado',
    };
  }
}

export default async function BlogProyect({ params }) {
  const { locale, id } = params;
  const { t, resources } = await initTranslations(locale, namespaces)


  const blogId = id.split('_')[1];
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);


  return (
    blogId ? 
      (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <div className='min-h-screen flex flex-col md:bg-gray-100 bg-white'>
        <NavBar />
        <BlogItem blogId={blogId} />
        <div className='py-4 w-full justify-center flex xl:px-40 md:px-20 md:bg-gray-100'>
          <LineButton text={t('general:back')} secondary />
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
    ) : (
      <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen flex flex-col items-center justify-center bg-white'>
          <h1 className='text-2xl font-bold'>{t('general:error')}</h1>
          <p className='text-lg p-10'>{t('general:blogNotFound')}</p>
          <LineButton text={t('general:back')} secondary nav={`/`} />
        </div>
      </TranslationsProvider>
    )
  );
}