import streamlit.components.v1 as components
import os

root_dir = os.path.dirname(os.path.abspath(__file__))
timeline_dir = os.path.join(root_dir, 'frontend', 'dist', 'apps', 'streamlit-blumagine-timeline')

_timeline_component = components.declare_component(
    "timeline_component",
    path=timeline_dir
)

def timeline_component(items, key=None):
    return _timeline_component(items=items, key=key)