import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  // const heroData = [
  //   {
  //     title: 'Random title used for testing',
  //     description:
  //       'This is a description of the hero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur',
  //     image: 'https://placehold.co/600x400',
  //   },
  // ];

  res.render('index', {
    title: 'Server data',
    // heroData,
  });
});

export default router;
