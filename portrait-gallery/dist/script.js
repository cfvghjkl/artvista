"use strict";
const computeProgress = function (e) {
    const scroll = document.documentElement.scrollTop;
    const total = document.documentElement.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max(scroll / total, 0), 1);
    document.body.style.setProperty("--animation-progress", progress.toString());
};
document.addEventListener("scroll", computeProgress, { passive: true });
document.addEventListener("resize", computeProgress, { passive: true });