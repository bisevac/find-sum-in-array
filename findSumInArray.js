function findSum(arr, sum) {
    let resultArray = [];

    const findSubSum = (subSum, _arr, currentIndexArray) => {
        let k = currentIndexArray[currentIndexArray.length - 1] || 0;

        for (k; k < _arr.length; k += 1) {
            const val = _arr[k];

            if (val !== null) {
                const total = subSum + val;
                let newIndexArray = [...currentIndexArray, k];

                const copyArray = _arr.slice();
                copyArray[k] = null;

                if (total === sum) {
                    resultArray.push(newIndexArray);
                } else if (total < sum) {
                    findSubSum(total, copyArray, newIndexArray);
                }
            }

        }
    }

    findSubSum(0, arr, [])

    return resultArray;
}


module.exports = findSum;