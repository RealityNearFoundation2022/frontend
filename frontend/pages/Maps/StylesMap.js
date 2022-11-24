export const styleClusters = {
  'circle-color': [
    'step',
    ['get', 'point_count'],
    '#51bbd6',
    100,
    '#f1f075',
    750,
    '#f28cb1',
  ],
  'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
}

export const styleClustersCount = {
  'text-field': '{point_count_abbreviated}',
  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
  'text-size': 12,
}

export const styleUnclusterPoint = {
  'circle-color': '#ffaa00',
  'circle-radius': 4,
  'circle-stroke-width': 1,
  'circle-stroke-color': '#fff',
}
