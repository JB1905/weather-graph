// @ts-nocheck
export const sendToGoogleAnalytics = ({ name, delta, id }) => {
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
    eventLabel: id,
    nonInteraction: true,
    transport: 'beacon',
  });
};
