import PropTypes from 'prop-types'
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, thumbnail_url, image_url, details, author, _id } = news;

    return (
        <div className='' >
            {/* card */}
            <div className='border rounded-xl  mt-5'>
                {/* author details */}
                <div className='bg-[#E7E7E7] rounded-t-xl px-10 py-4  w-full flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <img className="w-[40px] h-[40px] rounded-full" src={author.img} alt="" />
                        <div className='flex flex-col'>
                            <h2 className='font-semibold'>{author.name}</h2>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    {/* icon */}
                    <div className='flex text-2xl gap-3'>
                        <CiBookmark></CiBookmark>
                        <CiShare2 ></CiShare2>

                    </div>

                </div>

                <div className='p-4'>
                    <h2 className='text-xl font-bold '>{title}</h2>
                    <img className='w-full mt-4' src={image_url} alt="" />
                    {
                        details.length > 200 ?
                            <p className='mt-8'>{details.slice(0, 200)} <Link className='text-[#FC7553] font-bold' to={`/news/${_id}`}>Read more...</Link></p>
                            : <p>{details}</p>
                    }
                </div>


            </div>


        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;