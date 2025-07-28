import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import LineButton from '@/components/LineButton/LineButton';
import PocketBase from 'pocketbase';

const namespaces = ['general', 'navBar'];


export async function generateMetadata({ params }) {
  const { locale, id } = params;
  const slug = id;
  const idParts = slug.split('-');
  const projectId = idParts[idParts.length - 1]; // Extract the last part as the project ID

  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);

  try {
    const project = await pb.collection('Proyects').getOne(projectId);

    const formattedTitle = project?.[`title_${locale}`] ?? 'Project';
    const description = project?.[`description_${locale}_rich`].replace(/<[^>]+>/g, '') || 'No description available';
    const bannerImage = project
      ? `${api}/api/files/${project.collectionId}/${project.id}/${project.banner_img_desktop}`
      : '';

    return {
      title: formattedTitle,
      description,
      openGraph: {
        title: formattedTitle,
        description,
        images: [bannerImage],
        url: `https://rocknrolla23.com/${locale}/project/${id}`,
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


export default async function Project({ params }) {

  const { locale, id } = params;
  const { t, resources } = await initTranslations(locale, namespaces)
  
  const slug = id;
  const idParts = slug.split('-');
  const projectId = idParts[idParts.length - 1]; // Extract the last part
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);

  return (
    projectId ? (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <div className='min-h-screen flex flex-col md:bg-gray-100 bg-white'>
        <NavBar />
        <ProjectItem projectId={projectId} />
        <div className='py-4 w-full justify-center flex xl:px-40 md:px-20 md:bg-gray-100'>
          <LineButton text={t('general:back')} secondary />
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
    ) : (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-2xl font-bold'>{t('general:projectNotFound')}</h1>
      </div>
    )
  )
}
