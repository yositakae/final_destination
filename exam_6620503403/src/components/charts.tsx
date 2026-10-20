"use client";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import type { SeriesPoint } from "@/lib/domain";

const colors = ["#d39a61", "#e8b878", "#b88457", "#f2cd98", "#9f7653"];
const grid = "#ead8c1";
const axis = "#806f5e";
const tooltip = { backgroundColor: "#fffaf2", border: "1px solid #e6cfb2", borderRadius: 10, color: "#40352b" };
function Frame({ children }: { children: React.ReactNode }) { return <div className="h-72 w-full">{children}</div>; }
export function RevenueBar({ data, horizontal=false }: { data: SeriesPoint[]; horizontal?: boolean }) { return <Frame><ResponsiveContainer><BarChart data={data} layout={horizontal?"vertical":"horizontal"}><CartesianGrid stroke={grid}/><XAxis dataKey={horizontal?undefined:"label"} type={horizontal?"number":"category"} stroke={axis}/><YAxis dataKey={horizontal?"label":undefined} type={horizontal?"category":"number"} stroke={axis}/><Tooltip contentStyle={tooltip}/><Bar dataKey="value" fill="#d39a61" radius={6}/></BarChart></ResponsiveContainer></Frame>; }
export function RevenueLine({ data }: { data: SeriesPoint[] }) { return <Frame><ResponsiveContainer><LineChart data={data}><CartesianGrid stroke={grid}/><XAxis dataKey="label" stroke={axis}/><YAxis stroke={axis}/><Tooltip contentStyle={tooltip}/><Line type="monotone" dataKey="value" stroke="#c9793b" strokeWidth={3}/></LineChart></ResponsiveContainer></Frame>; }
export function RevenueArea({ data }: { data: SeriesPoint[] }) { return <Frame><ResponsiveContainer><AreaChart data={data}><XAxis dataKey="label" stroke={axis}/><YAxis stroke={axis}/><Tooltip contentStyle={tooltip}/><Area type="monotone" dataKey="value" stroke="#c9793b" fill="#f2cd98aa"/></AreaChart></ResponsiveContainer></Frame>; }
export function RevenuePie({ data }: { data: SeriesPoint[] }) { return <Frame><ResponsiveContainer><PieChart><Pie data={data} dataKey="value" nameKey="label" outerRadius={95} label={{fill:axis}}>{data.map((_,i)=><Cell key={i} fill={colors[i%colors.length]}/>)}</Pie><Tooltip contentStyle={tooltip}/><Legend/></PieChart></ResponsiveContainer></Frame>; }
export function RevenueComposed({ data }: { data: SeriesPoint[] }) { return <Frame><ResponsiveContainer><ComposedChart data={data}><XAxis dataKey="label" stroke={axis}/><YAxis stroke={axis}/><Tooltip contentStyle={tooltip}/><Bar dataKey="value" fill="#d39a61"/><Line dataKey="value" stroke="#9f5f32"/></ComposedChart></ResponsiveContainer></Frame>; }
export function RevenueScatter({ data }: { data: SeriesPoint[] }) { return <Frame><ResponsiveContainer><ScatterChart><XAxis dataKey="label" stroke={axis}/><YAxis dataKey="value" stroke={axis}/><Tooltip contentStyle={tooltip}/><Scatter data={data} fill="#b88457"/></ScatterChart></ResponsiveContainer></Frame>; }
