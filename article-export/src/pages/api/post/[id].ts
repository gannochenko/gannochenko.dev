import { getImages } from '../../../lib/getImages';
import { Post } from '../../../lib/post';
import { export2DevTo } from '../../../lib/export2DevTo';

export default async (req: any, res: any) => {
    const id = req.query.id;
    const safeId = id.replace(/[^a-z0-9_-]/gi, '');

    const post = new Post(safeId);

    const isPublished = await post.isPublished();
    if (!isPublished) {
        return res.status(500).json({
            data: {},
        });
    }

    const slug = await post.getSlug();

    const remoteImages = await getImages(slug);
    await post.replaceImages(remoteImages);

    const result = await export2DevTo(post);

    return res.status(200).json({
        data: result,
    });
};
