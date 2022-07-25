import React from 'react';
import classes from "./MyPagination.module.css";

const MyPagination = ({pagesArray, handler, selectedPage}) => {
    return (
        <div className={classes.pages}>
            {pagesArray.map(pageIndex =>
                <p
                    onClick={() => handler(pageIndex)}
                    className={pageIndex === selectedPage
                        ?
                        [classes.page__item, classes.page__current].join(" ")
                        :
                        classes.page__item
                    }
                    key={pageIndex}
                >{pageIndex}</p>
            )}
        </div>
    );
};

export default MyPagination;