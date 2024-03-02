import Detail from "@/components/chitiet/detail";
import { getPostByIDServer } from "@/libs/getPost";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
    const data =  await getPostByIDServer(params.id);
    const notFoundMetaData = {
        title: 'Not Found',
        description: 'The page you are looking for does not exist.',
    };

    if(!data) { redirect('/') }

    try {
      return {
        title: `${data.title} - ${data.name}`,
      }
    } catch (error) {
      return notFoundMetaData;
    }
}

const Page = async ({params}) => {

  const data = await getPostByIDServer(params.id);

  return <Detail data={data} />
}

export default Page;