const supertest = require('supertest');
import ReviewItem from '../client/src/components/reviewItem.jsx';
import ReviewAverage from '../client/src/components/ReviewAverage.jsx';

let reviews = [
  {
    overall_rating: '5',
    value_rating: '4',
    quality_rating: '3',
    appearance_rating: '2',
    ease_of_assembly_rating: '5',
    works_as_expected_rating: '1',
    recommended: '0'
  },
  {
    overall_rating: '4',
    value_rating: '2',
    quality_rating: '5',
    appearance_rating: '4',
    ease_of_assembly_rating: '2',
    works_as_expected_rating: '3',
    recommended: '1'
  },
  {
    overall_rating: '3',
    value_rating: '1',
    quality_rating: '0',
    appearance_rating: '3',
    ease_of_assembly_rating: '4',
    works_as_expected_rating: '2',
    recommended: '1'
  }
]
//Testing ReviewAverage.jsx
it('getAverages returns correct overall average', async () => {
  expect(ReviewAverage.prototype.getOverall(reviews)).toBe(5.4);
});
it('getAverages returns correct value average', async () => {
  expect(ReviewAverage.prototype.getValue(reviews)).toBe(4.2);
});
it('getAverages returns correct apperance average', async () => {
  expect(ReviewAverage.prototype.getAppearance(reviews)).toBe(2.4);
});
it('getAverages returns correct assembly average', async () => {
  expect(ReviewAverage.prototype.getAssembly(reviews)).toBe(5.2);
});
it('getAverages returns correct assembly average', async () => {
  expect(ReviewAverage.prototype.getExpected(reviews)).toBe(1.3);
});

//Testing ReviewItem.jsx
it('showRecommend returns correct recommend string', async () => {
  expect(ReviewItem.prototype.showRecommend(reviews[0].recommended)).toBe('☓ No, I don\'t recommend this product');
});

