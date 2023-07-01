import { add } from "./add";
import { add0 } from "./add0";
import { add1 } from "./add1";
import { add2 } from "./add2";
import { add3 } from "./add3";
import { add4 } from "./add4";
import { addPoint } from "./addPoint";
import { aOf } from "./aOf";
import { blend } from "./blend";
import { blend0 } from "./blend0";
import { blend1 } from "./blend1";
import { blend2 } from "./blend2";
import { blend3 } from "./blend3";
import { blend4 } from "./blend4";
import { blendPoint } from "./blendPoint";
import { bOf } from "./bOf";
import { clamp } from "./clamp";
import { cOf } from "./cOf";
import { contains } from "./contains";
import { distance } from "./distance";
import { distance0 } from "./distance0";
import { distance1 } from "./distance1";
import { distance2 } from "./distance2";
import { distance3 } from "./distance3";
import { distance4 } from "./distance4";
import { distancePoint } from "./distancePoint";
import { distancePoints2 } from "./distancePoints2";
import { divide } from "./divide";
import { divide0 } from "./divide0";
import { divide1 } from "./divide1";
import { divide2 } from "./divide2";
import { divide3 } from "./divide3";
import { divide4 } from "./divide4";
import { dividePoint } from "./dividePoint";
import { dOf } from "./dOf";
import { eOf } from "./eOf";
import { isPoint } from "./isPoint";
import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { isPointObject1 } from "./isPointObject1";
import { isPointObject2 } from "./isPointObject2";
import { isPointObject3 } from "./isPointObject3";
import { isPointObject4 } from "./isPointObject4";
import { isVec } from "./isVec";
import { isVec0 } from "./isVec0";
import { isVec1 } from "./isVec1";
import { isVec2 } from "./isVec2";
import { isVec3 } from "./isVec3";
import { isVec4 } from "./isVec4";
import { jsonToPoint3 } from "./jsonToPoint3";
import { length } from "./length";
import { length0 } from "./length0";
import { length1 } from "./length1";
import { length2 } from "./length2";
import { length3 } from "./length3";
import { length4 } from "./length4";
import { lengthPoint } from "./lengthPoint";
import { lerp } from "./lerp";
import { lerp0 } from "./lerp0";
import { lerp1 } from "./lerp1";
import { lerp2 } from "./lerp2";
import { lerp3 } from "./lerp3";
import { lerp4 } from "./lerp4";
import { lerpPoint } from "./lerpPoint";
import { midPoint2 } from "./midPoint2";
import { midPoint3 } from "./midPoint3";
import { multiply } from "./multiply";
import { multiply0 } from "./multiply0";
import { multiply1 } from "./multiply1";
import { multiply2 } from "./multiply2";
import { multiply3 } from "./multiply3";
import { multiply4 } from "./multiply4";
import { multiplyPoint } from "./multiplyPoint";
import { normalize0 } from "./normalize0";
import { normalize1 } from "./normalize1";
import { normalize2 } from "./normalize2";
import { normalize3 } from "./normalize3";
import { normalize4 } from "./normalize4";
import { normalizePoint } from "./normalizePoint";
import { point3ToJson } from "./point3ToJson";
// import { quant } from "./quant";
import { scaler } from "./scaler";
import { scaler0 } from "./scaler0";
import { scaler1 } from "./scaler1";
import { scaler2 } from "./scaler2";
import { scaler3 } from "./scaler3";
import { scaler4 } from "./scaler4";
import { scalerPoint } from "./scalerPoint";
import { subtract } from "./subtract";
import { subtract0 } from "./subtract0";
import { subtract1 } from "./subtract1";
import { subtract2 } from "./subtract2";
import { subtract3 } from "./subtract3";
import { subtract4 } from "./subtract4";
import { subtractPoint } from "./subtractPoint";
import { toVec } from "./toVec";
import { toVec0 } from "./toVec0";
import { toVec1 } from "./toVec1";
import { toVec2 } from "./toVec2";
import { toVec3 } from "./toVec3";
import { toVec4 } from "./toVec4";
import { translater } from "./translater";
import { translater0 } from "./translater0";
import { translater1 } from "./translater1";
import { translater2 } from "./translater2";
import { translater3 } from "./translater3";
import { translater4 } from "./translater4";
import { translaterPoint } from "./translaterPoint";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { toTransform3 } from "./toTransform3";
import { includesPoint } from "./includesPoint";
import { removeDuplicatePoints } from "./removeDuplicatePoints";
import { isEqual } from "./isEqual";

export const Maths = {
  toTransform3,
  add,
  add0,
  add1,
  add2,
  add3,
  add4,
  addPoint,
  blend,
  blend0,
  blend1,
  blend2,
  blend3,
  blend4,
  blendPoint,
  clamp,
  contains,
  distance,
  distance0,
  distance1,
  distance2,
  distance3,
  distance4,
  distancePoint,
  divide,
  divide0,
  divide1,
  divide2,
  divide3,
  divide4,
  dividePoint,
  isPoint,
  isPoint0,
  isPoint1,
  isPoint2,
  isPoint3,
  isPoint4,
  isPointObject1,
  isPointObject2,
  isPointObject3,
  isPointObject4,
  isVec,
  isVec0,
  isVec1,
  isVec2,
  isVec3,
  isVec4,
  jsonToPoint3,
  length,
  length0,
  length1,
  length2,
  length3,
  length4,
  lengthPoint,
  lerp,
  lerp0,
  lerp1,
  lerp2,
  lerp3,
  lerp4,
  lerpPoint,
  midPoint2,
  midPoint3,
  multiply,
  multiply0,
  multiply1,
  multiply2,
  multiply3,
  multiply4,
  multiplyPoint,
  normalize0,
  normalize1,
  normalize2,
  normalize3,
  normalize4,
  normalizePoint,
  point3ToJson,
  // quant,
  scaler,
  scaler0,
  scaler1,
  scaler2,
  scaler3,
  scaler4,
  scalerPoint,
  subtract,
  subtract0,
  subtract1,
  subtract2,
  subtract3,
  subtract4,
  subtractPoint,
  toVec,
  toVec0,
  toVec1,
  toVec2,
  toVec3,
  toVec4,
  translater,
  translater0,
  translater1,
  translater2,
  translater3,
  translater4,
  translaterPoint,
  wOf,
  xOf,
  yOf,
  zOf,
  aOf,
  bOf,
  cOf,
  dOf,
  eOf,
  distancePoints2,
  includesPoint,
  removeDuplicatePoints,
  isEqual,
};
