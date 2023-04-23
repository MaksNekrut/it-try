import {ICourse} from "@root/types";
import directions from "@/Pages/directions/Directions";
export function getUniqueValues (data:ICourse[], field: keyof ICourse)  {
    return data.reduce((acc, el) => {
        if (!acc.includes(el[field])) {
            acc.push(el[field]);
        }
        return acc;
    }, [])
}

export function getCountOfCourses (arr: string[], courses: ICourse[]) {
    let data: any = [];
    arr.forEach(direction => {
        let count = 0;
        courses.forEach(course => {
            if(course.direction === direction) {
                count += 1;
            }
        })
        data.push({direction, count})
    })
    return data;
}