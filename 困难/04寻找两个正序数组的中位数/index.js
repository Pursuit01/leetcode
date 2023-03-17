function findMedianSortedArrays(nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;
  let length = nums1.length + nums2.length;
  let isOdd = length % 2;
  let mid = Math.floor(length / 2);
  while (res.length < length) {
    if (nums1[i] > nums2[j] || i == nums1.length) {
      res.push(nums2[j]);
      if (j <= nums2.length - 1) {
        j++;
      }
    }
    if (nums1[i] <= nums2[j] || j == nums2.length) {
      res.push(nums1[i]);
      if (i <= nums1.length - 1) {
        i++;
      }
    }
    if (res[mid] != undefined) {
      return isOdd ? res[mid] : (res[mid] + res[mid - 1]) / 2;
    }
  }
}
