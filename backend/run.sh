#!/bin/bash
source back-env/bin/activate
uvicorn app.main:app --reload 