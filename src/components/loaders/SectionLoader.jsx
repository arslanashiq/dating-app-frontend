import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// components
import BackdropLoader from "./BackdropLoader";

// slices
import { stopLoading } from "@/store/slices/commonSlice";

// utilities
import { BACKDROP_DELAY_TIMER } from "@/utilities/constants";

function SectionLoader({
  isLoading = false,
  showContentWhileLoading = true,
  children = <></>,
}) {
  const dispatch = useDispatch();
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  useEffect(() => {
    let timerId = null;
    if (isLoading) {
      timerId = setTimeout(() => {
        setIsBackdropOpen(true);
      }, BACKDROP_DELAY_TIMER);
    } else {
      dispatch(stopLoading());
      setIsBackdropOpen(false);

      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isLoading, dispatch]);

  if (showContentWhileLoading) {
    return (
      <>
        <BackdropLoader isLoading={isBackdropOpen} />
        {children}
      </>
    );
  } else {
    if (isLoading) {
      return <BackdropLoader isLoading={isBackdropOpen} />;
    } else {
      return children;
    }
  }
}

SectionLoader.propTypes = {
  isLoading: PropTypes.bool,
  showContentWhileLoading: PropTypes.bool,
  children: PropTypes.node,
};
export default SectionLoader;
